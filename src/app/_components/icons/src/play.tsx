import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm2.5,14a1,1,0,0,1-2,0V13.28088L8.12451,16.78125A1.00014,1.00014,0,0,1,6.5,16V8a1.00014,1.00014,0,0,1,1.62451-.78125L12.5,10.71912V8a1,1,0,0,1,2,0Zm3,0a1,1,0,0,1-2,0V8a1,1,0,0,1,2,0Z"/> </BaseIcon>
); }