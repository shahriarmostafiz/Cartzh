import Negotiator from "negotiator"
import { NextResponse } from "next/server"
import { match } from '@formatjs/intl-localematcher'



const locales = ["en", "bn"]
const defaultLocale = "en"
function getLocale(request) {
    const acceptedLang = request.headers.get("accept-language") ?? undefined
    let headers = { 'accept-language': acceptedLang }

    let languages = new Negotiator({ headers }).languages()

    return match(languages, locales, defaultLocale)

}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    const pathNameIsMissing = locales.every(locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)
    // console.log(pathNameIsMissing);
    if (pathNameIsMissing) {
        const locale = getLocale(request)
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    }
    return NextResponse.next()
}
// export const config = {
//     matcher: [
//         // Skip all internal paths (_next)
//         '/((?!api|assets|.*\\..*|_next).*)',
//         // Optional: only run on root (/) URL
//         // '/'
//     ],
// }
export const config = {
    matcher: [
        // Skip all internal paths (_next, assets, api)
        '/((?!api|assets|.*\\..*|_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}