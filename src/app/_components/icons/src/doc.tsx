import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path fillRule="evenodd" clipRule="evenodd" d="M8 4L9.3 2.375C9.49 2.138 9.777 2 10.081 2H13.92C14.224 2 14.511 2.138 14.701 2.375L16 4V4V5C16 5.552 15.552 6 15 6H9C8.448 6 8 5.552 8 5V4V4H8Z"/><path d="M8 4H6C4.895 4 4 4.895 4 6V19C4 20.105 4.895 21 6 21H18C19.105 21 20 20.105 20 19V6C20 4.895 19.105 4 18 4H16"/><path d="M8 11H16"/><path d="M8 16H16"/> </BaseIcon>
); }