import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path d="M 13.6 7.7 C 14.5 8.5 14.5 10 13.6 10.8 C 12.7 11.7 11.3 11.7 10.4 10.8 C 9.5 10 9.5 8.5 10.4 7.7 C 11.3 6.8 12.7 6.8 13.6 7.7"/><path d="M 16.3 16.5 C 16.1 15.2 14.9 14.1 13.5 14.1 H 10.5 C 9.1 14.1 7.9 15.2 7.7 16.5"/><path fillRule="evenodd" clipRule="evenodd" d="M 17 21 H 7 C 4.8 21 3 19.2 3 17 V 7 C 3 4.8 4.8 3 7 3 H 17 C 19.2 3 21 4.8 21 7 V 17 C 21 19.2 19.2 21 17 21 Z"/> </BaseIcon>
); }