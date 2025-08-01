import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path d="M3 15H7.382C7.761 15 8.107 15.214 8.276 15.553L8.723 16.447C8.893 16.786 9.239 17 9.618 17H14.382C14.761 17 15.107 16.786 15.276 16.447L15.723 15.553C15.893 15.214 16.239 15 16.618 15H21"/><path d="M17 3H19C20.105 3 21 3.895 21 5V19C21 20.105 20.105 21 19 21H5C3.895 21 3 20.105 3 19V5C3 3.895 3.895 3 5 3H7"/><path d="M11.99 12V3"/><path d="M15.591 6.591L12 3L8.409 6.591"/> </BaseIcon>
); }