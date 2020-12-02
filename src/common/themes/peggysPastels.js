/* "Peggy's Pastels" by tPenguinLTG
 * https://www.deviantart.com/tpenguinltg/art/Peggy-s-Pastels-505540096
 */

const { mapFromWindowsTheme } = require('../utils');

const theme = {
  ActiveBorder: 'rgb(244, 193, 202)',
  ActiveTitle: 'rgb(0, 191, 188)',
  AppWorkspace: 'rgb(255, 184, 182)',
  Background: 'rgb(162, 219, 210)',
  ButtonAlternateFace: 'rgb(181, 181, 181)',
  ButtonDkShadow: 'rgb(64, 64, 64)',
  ButtonFace: 'rgb(244, 193, 202)',
  ButtonHilight: 'rgb(250, 224, 228)',
  ButtonLight: 'rgb(247, 219, 215)',
  ButtonShadow: 'rgb(222, 69, 96)',
  ButtonText: 'rgb(0, 0, 0)',
  GradientActiveTitle: 'rgb(202, 156, 185)',
  GradientInactiveTitle: 'rgb(236, 145, 162)',
  GrayText: 'rgb(222, 69, 96)',
  Hilight: 'rgb(162, 219, 210)',
  HilightText: 'rgb(0, 0, 0)',
  HotTrackingColor: 'rgb(0, 128, 128)',
  InactiveBorder: 'rgb(244, 193, 202)',
  InactiveTitle: 'rgb(0, 187, 169)',
  InactiveTitleText: 'rgb(0, 85, 77)',
  InfoText: 'rgb(0, 0, 0)',
  InfoWindow: 'rgb(204, 255, 255)',
  Menu: 'rgb(244, 193, 202)',
  MenuHilight: 'rgb(162, 219, 210)',
  MenuText: 'rgb(0, 0, 0)',
  Scrollbar: 'rgb(250, 224, 228)',
  TitleText: 'rgb(255, 255, 255)',
  Window: 'rgb(244, 255, 255)',
  WindowFrame: 'rgb(0, 0, 0)',
  WindowText: 'rgb(0, 0, 0)'
};

export default mapFromWindowsTheme('peggysPastels', theme, false);
export const peggysPastelsG = mapFromWindowsTheme(
  'peggysPastelsG',
  theme,
  true
);
