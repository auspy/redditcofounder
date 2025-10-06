# Discount Coupon API

This API allows you to create discount coupons for your products using the Dodo Payments platform.

## Endpoint

```
POST /api/discount/create
```

## Authentication

The API is secured with an API key. You must include the key in the `Authorization` header:

```
Authorization: Bearer YOUR_API_KEY
```

The API key is stored in the environment variable `DISCOUNT_API_KEY`.

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| amount | number | Yes | The discount amount in basis points (e.g., 1000 for 10%) |
| type | string | Yes | Must be "percentage" |
| name | string | No | A readable name for the discount |
| code | string | No | Custom discount code (min 3 chars). If not provided, a random code will be generated |
| expiresAt | string | No | When the discount expires (ISO date string) |
| usageLimit | number | No | How many times this discount can be used (min 1) |
| restrictedTo | array | No | List of product IDs to restrict usage |
| studentEmail | string | No | For tracking purposes only, not sent to Dodo |

## Response

### Success Response (200 OK)

```json
{
  "success": true,
  "discount": {
    "amount": 1000,
    "business_id": "string",
    "code": "STUDENT10",
    "created_at": "2023-11-07T05:31:56Z",
    "discount_id": "string",
    "expires_at": "2024-11-07T05:31:56Z",
    "name": "Student Discount",
    "restricted_to": [],
    "times_used": 0,
    "type": "percentage",
    "usage_limit": 1
  }
}
```

### Error Response (400, 401, 500)

```json
{
  "error": "Error message",
  "details": ["Validation error details"] // Only for validation errors
}
```

## Example Usage

```javascript
// Using fetch API
const response = await fetch('https://yourdomain.com/api/discount/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    amount: 1000, // 10%
    type: 'percentage',
    name: 'Student Discount',
    code: 'STUDENT10', // Optional, will be auto-generated if not provided
    expiresAt: '2024-12-31T23:59:59Z',
    usageLimit: 1,
    studentEmail: 'student@university.edu' // For tracking
  })
});

const data = await response.json();
```

## Notes

- The `amount` parameter for percentage discounts is in basis points (1/100th of a percent). For example, 1000 = 10%, 2500 = 25%.
- The generated discount code can be sent to students via email to be used at checkout.
- All discount codes are automatically converted to uppercase.
- If you don't provide a custom `code`, the API will generate a random 16-character code. 