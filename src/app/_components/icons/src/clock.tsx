import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path d="M12 21C16.95 21 21 16.95 21 12C21 7.05 16.95 3 12 3"/><path d="M12 21.0002C9.069 21.0002 6.462 19.5742 4.816 17.3882"/><path d="M4.816 17.388C3.682 15.882 3 14.019 3 12C3 7.05 7.05 3 12 3" strokeDasharray="0"/><path d="M7.359 15.639L12.281 12.703V6.375"/> </BaseIcon>
); }