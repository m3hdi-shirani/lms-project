import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path d="M3 18C3 15.791 4.791 14 7 14H11C13.209 14 15 15.791 15 18"/><path d="M16 4.651C17.381 4.651 18.5 5.77 18.5 7.151C18.5 8.532 17.381 9.651 16 9.651"/><path d="M11.4049 4.99613C12.7331 6.3243 12.7331 8.4777 11.4049 9.80587C10.0767 11.134 7.92333 11.134 6.59516 9.80587C5.26699 8.4777 5.26699 6.3243 6.59516 4.99613C7.92333 3.66796 10.0767 3.66796 11.4049 4.99613"/><path d="M17 13C19.209 13 21 14.791 21 17"/> </BaseIcon>
); }