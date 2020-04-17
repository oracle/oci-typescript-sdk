// utility method to check if environment is node or browser
export function isBrowser() {
  if (typeof window === "undefined") {
    return false;
  }
  return true;
}

// utility method checks if object is empty or not
export function isEmpty(obj: any): boolean {
  return Object.keys(obj).length === 0;
}

// Utility method to check if value is null, else throw error with msg.
export function checkNotNull(value: string | null, msg: string): string {
  if (value) {
    return value;
  }
  throw new Error(msg);
}
