export type DomainAlertProps = {
    title: string;
    type?: "success" | "failed" | "warning";
    duration?: number;
}