const blockedEmailDomains = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.uk',
  'hotmail.com',
  'hotmail.co.uk',
  'outlook.com',
  'outlook.co.uk',
  'live.com',
  'live.co.uk',
  'msn.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
  'yandex.com',
  'gmx.com',
  'gmx.co.uk',
  'mail.com',
  'zoho.com',
])

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function getCompanyEmailError(email: string): string | null {
  const trimmed = email.trim()
  if (!trimmed) {
    return null
  }

  if (!emailPattern.test(trimmed)) {
    return 'Enter a valid email address.'
  }

  const domain = trimmed.split('@')[1]?.toLowerCase() ?? ''
  if (blockedEmailDomains.has(domain)) {
    return 'Company emails only. Please use your work email.'
  }

  return null
}
