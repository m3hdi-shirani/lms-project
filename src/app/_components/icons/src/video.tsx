import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path d="M15.493 18.25C14.527 18.25 13.743 19.034 13.75 20C13.75 20.966 14.534 21.75 15.5 21.75C16.466 21.75 17.25 20.966 17.25 20C17.25 19.034 16.466 18.25 15.493 18.25"/><path fillRule="evenodd" clipRule="evenodd" d="M19 15H5C3.895 15 3 14.105 3 13V5C3 3.895 3.895 3 5 3H19C20.105 3 21 3.895 21 5V13C21 14.105 20.105 15 19 15Z"/><path d="M3 20H13.75"/><path d="M17.25 20H21"/> </BaseIcon>
); }