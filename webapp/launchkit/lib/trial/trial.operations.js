import { getTrialsCollection } from "@/adapters/trial.db";

// Default trial duration in days
const TRIAL_DURATION_DAYS = parseInt(process.env.TRIAL_DAYS || "7");

/**
 * Start a new trial for a device
 * @param {string} deviceId - Unique device identifier
 * @param {Object} options - Additional options
 * @returns {Object} Trial information
 */
export async function startTrial(deviceId, options = {}) {
  const collection = await getTrialsCollection();
  const now = new Date();

  // Check if trial already exists
  const existingTrial = await collection.findOne({ device_id: deviceId });
  if (existingTrial) {
    console.log(`[Trial] Device ${deviceId} already has a trial`);
    const formattedTrial = formatTrialResponse(existingTrial);
    return {
      success: false,
      error: "Trial already exists for this device",
      message: `You've already started your 7-day free trial. ${formattedTrial.days_remaining} days remaining.`,
      trial: formattedTrial,
    };
  }

  // Create new trial
  const expiresAt = new Date(
    now.getTime() + TRIAL_DURATION_DAYS * 24 * 60 * 60 * 1000
  );

  const trial = {
    device_id: deviceId,
    started_at: now,
    expires_at: expiresAt,
    created_at: now,
    app_version: options.appVersion || null,
    email: options.email || null,
  };

  try {
    await collection.insertOne(trial);
    console.log(`[Trial] Started new trial for device ${deviceId}`);

    return {
      success: true,
      message: "Welcome! Your 7-day free trial has started.",
      trial: formatTrialResponse(trial),
    };
  } catch (error) {
    console.error(
      `[Trial] Error starting trial for device ${deviceId}:`,
      error
    );
    throw error;
  }
}

/**
 * Check trial status for a device
 * @param {string} deviceId - Unique device identifier
 * @returns {Object|null} Trial information or null if not found
 */
export async function checkTrialStatus(deviceId) {
  const collection = await getTrialsCollection();

  const trial = await collection.findOne({ device_id: deviceId });

  if (!trial) {
    console.log(`[Trial] No trial found for device ${deviceId}`);
    return {
      found: false,
      message: "No trial found. Start your 7-day free trial today!",
    };
  }

  console.log(`[Trial] Found trial for device ${deviceId}`);
  const formattedTrial = formatTrialResponse(trial);

  let message;
  if (formattedTrial.active) {
    message = `Your trial is active with ${formattedTrial.days_remaining} days remaining.`;
  } else {
    message = "Your trial has expired. Please activate a license to continue.";
  }

  return {
    found: true,
    message,
    ...formattedTrial,
  };
}

/**
 * Format trial response with calculated fields
 * @param {Object} trial - Trial document from MongoDB
 * @returns {Object} Formatted trial response
 */
function formatTrialResponse(trial) {
  const now = new Date();
  const expiresAt = new Date(trial.expires_at);
  const isActive = expiresAt > now;
  const daysRemaining = isActive
    ? Math.ceil((expiresAt - now) / (1000 * 60 * 60 * 24))
    : 0;

  return {
    active: isActive,
    started_at: trial.started_at.toISOString(),
    expires_at: trial.expires_at.toISOString(),
    days_remaining: daysRemaining,
    device_id: trial.device_id,
  };
}

/**
 * Clean up expired trials (optional maintenance function)
 * @param {number} daysOld - Remove trials expired more than this many days ago
 * @returns {number} Number of trials removed
 */
export async function cleanupExpiredTrials(daysOld = 30) {
  const collection = await getTrialsCollection();
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysOld);

  const result = await collection.deleteMany({
    expires_at: { $lt: cutoffDate },
  });

  console.log(`[Trial] Cleaned up ${result.deletedCount} expired trials`);
  return result.deletedCount;
}
