export function base64Encode(message) {
  return Buffer.from(message).toString('base64');
}
