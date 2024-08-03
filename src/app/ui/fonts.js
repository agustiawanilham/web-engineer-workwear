import { Anonymous_Pro, DM_Mono, League_Spartan } from "next/font/google";

export const dmMono = DM_Mono({
  weight: ["300", "500"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
  preload: true, // Ensure preload is enabled if needed
});

export const leagueSpartan = League_Spartan({
  preload: true,
  subsets: ["latin"],
});

export const anonymousPro = Anonymous_Pro({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});
