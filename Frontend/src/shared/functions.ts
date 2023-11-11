export function formatDate(dateStr: string): string {
  if (!dateStr) return "";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, month, day] = dateStr.split("-");

  return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
}
