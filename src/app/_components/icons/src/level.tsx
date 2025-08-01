import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path d="M3 3V21"/><path fillRule="evenodd" clipRule="evenodd" d="M3 14.333H15V18C15 18.552 14.552 19 14 19H3V14.333Z"/><path fillRule="evenodd" clipRule="evenodd" d="M3 9.66699H20C20.552 9.66699 21 10.115 21 10.667V13.334C21 13.886 20.552 14.334 20 14.334H3V9.66699Z"/><path fillRule="evenodd" clipRule="evenodd" d="M3 5H17C17.552 5 18 5.448 18 6V9.667H3V5Z"/> </BaseIcon>
); }