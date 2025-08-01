import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path d="M13.57 17.5H16.25"/><path d="M14.91 17.5V12.5L13.45 13.82"/><path d="M21 9H3"/><path d="M8 2.87988V5.11988"/><path d="M16 2.87988V5.11988"/><path fillRule="evenodd" clipRule="evenodd" d="M18 21H6C4.343 21 3 19.657 3 18V7C3 5.343 4.343 4 6 4H18C19.657 4 21 5.343 21 7V18C21 19.657 19.657 21 18 21Z"/><path d="M8.25 13.46C8.409 12.91 8.895 12.5 9.496 12.5C10.224 12.5 10.815 13.09 10.815 13.819C10.815 14.471 10.286 15 9.634 15C10.286 15 10.815 15.529 10.815 16.181C10.815 16.909 10.225 17.5 9.496 17.5C8.895 17.5 8.409 17.09 8.25 16.54"/> </BaseIcon>
); }