import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path fillRule="evenodd" clipRule="evenodd" d="M 17.5 21.5 H 9.1 C 6 21.5 3.7 20.4 4.4 15.9 L 5.1 9.9 C 5.6 7.7 7 6.8 8.2 6.8 H 18.4 C 19.7 6.8 21 7.7 21.5 9.9 L 22.3 15.9 C 22.8 19.9 20.5 21.5 17.5 21.5 Z"/><path d="M 17.3 5.7 C 17.3 3.3 15.4 1.4 13 1.4 V 1.4 C 11.8 1.4 10.7 1.8 9.9 2.6 C 9.1 3.4 8.6 4.5 8.6 5.7 V 5.7"/><path d="M 16.2 11.1 H 16.2"/><path d="M 10.4 11.1 H 10.4"/> </BaseIcon>
); }