export function isEmpty(value: unknown): boolean {
return (
    value === undefined ||
    value === null ||
    value === "" ||
    Number.isNaN(value)
)
}