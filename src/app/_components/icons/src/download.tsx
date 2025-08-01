import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path d="M15 10L12 13L9 10"/><path d="M12 3V13"/><path d="M8 16H16"/><path d="M18.364 5.63623C21.879 9.15123 21.879 14.8492 18.364 18.3642C14.849 21.8792 9.15101 21.8792 5.63601 18.3642C2.12101 14.8492 2.12101 9.15123 5.63601 5.63623"/> </BaseIcon>
); }