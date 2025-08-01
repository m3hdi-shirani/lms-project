import BaseIcon from "@/app/_components/icons/BaseIcon"; import { SvgIcon } from
"@/app/_components/icons/icon.types"; export default function
SvgIcon(props:SvgIcon) { return (
<BaseIcon {...props}> <path d="M19.911 9.96189C19.022 6.44489 15.845 3.83789 12.052 3.83789C11.038 3.83789 10.072 4.03189 9.178 4.37189"/><path d="M6.398 6.14307C3.797 8.67207 3.127 12.7261 5.024 16.0111C5.531 16.8891 6.182 17.6281 6.923 18.2331"/><path d="M10.953 5.68901L8.755 4.05801L10.953 2.06201"/><path d="M7.176 16.0381L6.863 18.7571L4.035 17.8521"/><path d="M18.028 14.1339L20.539 13.0459L21.169 15.9479"/><path d="M9.848 19.7561C13.339 20.7451 17.184 19.2971 19.081 16.0121C19.588 15.1341 19.903 14.2011 20.056 13.2561"/> </BaseIcon>
); }