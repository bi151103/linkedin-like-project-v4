import { Experience } from "./model";
import { NOT_AVAILABLE_CONTENT, PRESENT_CONTENT } from "./constant.js";
// mostly AI Generated

export function calculateTotalDuration(data: Experience[]): string | null {
  if (!data || data.length === 0) return null;

  const latestEndStr = data[0].duration?.end;
  const endDate = latestEndStr ? new Date(latestEndStr) : new Date();

  const earliestStartStr = data[data.length - 1].duration?.start;
  if (!earliestStartStr) return null;
  const startDate = new Date(earliestStartStr);

  let totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;

  totalMonths = Math.max(0, totalMonths);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearPart = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthPart = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  if (years > 0 && months > 0) {
    return `${yearPart} ${monthPart}`;
  }

  if (years > 0) {
    return yearPart;
  }

  return months > 0 ? monthPart : "1 mo";
}

export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  totalMonths = Math.max(0, totalMonths);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearPart = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthPart = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  if (years > 0 && months > 0) {
    return `${yearPart} ${monthPart}`;
  }

  if (years > 0) {
    return yearPart;
  }

  return months > 0 ? monthPart : "1 mo";
}

const formatMonthYear = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
};
export const getDisplayedDuration = (
  duration?: { start?: string; end?: string },
  presentText: string = PRESENT_CONTENT,
  fallbackText: string = NOT_AVAILABLE_CONTENT,
): string => {
  if (!duration) return fallbackText;

  const { start, end } = duration;

  if (start && end) {
    return `${formatMonthYear(start)} - ${formatMonthYear(end)}`;
  }

  if (start) {
    return `${formatMonthYear(start)} - ${presentText}`;
  }

  if (end) {
    return formatMonthYear(end);
  }

  return fallbackText;
};
