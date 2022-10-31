export default function getScreenWidth(
  valueForDesktop: any,
  valueForTablet: any,
  valueForMobile: any
) {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (import.meta.env.VITE_SCREEN_MD >= width) {
    return valueForMobile;
  }
  if (import.meta.env.VITE_SCREEN_XL >= width) {
    return valueForTablet;
  }
  return valueForDesktop;
}
