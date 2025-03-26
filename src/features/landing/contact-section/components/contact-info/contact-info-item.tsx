import Link from "next/link";
import type { ContactInfoItem } from "../../contact-types";

interface ContactInfoItemProps {
  item: ContactInfoItem;
}

export function ContactInfoItemCard({ item }: ContactInfoItemProps) {
  const { icon: Icon, label, value, link } = item;

  const content = (
    <div className="flex items-center gap-3">
      <div className="p-3 bg-muted rounded-md">
        <Icon className="text-primary" />
      </div>

      <div>
        <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
        <dd className="text-sm font-semibold text-foreground">{value}</dd>
      </div>
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : content;
}
