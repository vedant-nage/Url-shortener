# Nanoid

Nanoid is a tiny, secure, and URL-friendly unique string generator.  
It is commonly used as an alternative to UUIDs for generating short unique
identifiers such as database IDs, tokens, and API keys.

---

## Features of Nanoid

### 1) Small Size
Nanoid is extremely lightweight (approximately 100–200 bytes when minified).
It includes a size-limit watchdog that prevents the package from growing
unexpectedly during development.

Note:
Nanoid does NOT use Brotli compression at runtime.
Brotli is only used during build-time size measurement.

---

### 2) Secure
Nanoid uses a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG).

- Browser: crypto.getRandomValues()
- Node.js: crypto.randomBytes()
- Does NOT use Math.random() in the secure version

This makes the generated IDs unpredictable and suitable for
security-sensitive use cases such as API keys and authentication tokens.

---

### 3) Short IDs
Nanoid uses a large alphabet:

A–Z a–z 0–9 _ -

- Alphabet size: 64 characters
- Default Nanoid length: 21 characters
- UUID v4 length: 36 characters

Because of the larger alphabet, Nanoid provides similar collision resistance
with shorter IDs compared to UUIDs.

---

## Nanoid APIs

Nanoid provides two versions:

---

# 1) Secure Nanoid (Default)
Uses cryptographically secure randomness and should be used when security
is important.

```js
import { nanoid } from 'nanoid'

const id = nanoid()
// => "Uakgb_J5m9g-0JDMbcJqLJ"
Use cases:
API keys
Tokens
Database IDs
Session identifiers

2) Non-Secure Nanoid

Uses Math.random() instead of cryptographic randomness.
import { nanoid } from 'nanoid/non-secure'
const id = nanoid()
// => "Uakgb_J5m9g-0JDMbcJqLJ"
Characteristics:
It is Faster
Not cryptographically secure
Not suitable for sensitive data
Use cases:
UI keys
Temporary IDs
Non-critical identifiers

Custom Alphabet Nanoid
Nanoid allows generating IDs using is a custom alphabet and length.

import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('1234567890abcdef', 10)
const id = nanoid()
// => "4f90d13a42"

# Best Practices
- Use the secure Nanoid for tokens, API keys, and authentication.
- Use non-secure Nanoid only for UI or temporary identifiers.
- Avoid reducing ID length unless collision risk is well understood.
- Prefer default settings unless customization is necessary.
