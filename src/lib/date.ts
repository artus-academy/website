export function formatDate(dateInput: string | Date) {
  const date = new Date(dateInput);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";

  if (diffDays > 0 && diffDays <= 30) {
    return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
  }

  return dateString(date);
}

export function dateString(dateInput: string | Date): string {
  const date = new Date(dateInput);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getNextMonth() {
  const date = new Date();
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  return date.toLocaleString("default", { month: "long" });
}
