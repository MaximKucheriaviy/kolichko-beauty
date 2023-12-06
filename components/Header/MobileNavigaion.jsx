import { Drawer } from "@mui/material";
import Link from "next/link";
import { links } from "@/service/links";
import { DrawerNav } from "./StyledHeader";
import { useDementions } from "@/service/useDemenshions";
import Image from "next/image";

export const MobileNavigaiton = ({ open, setOpen }) => {
  const dementions = useDementions();
  return (
    <Drawer anchor="right" open={open} onClick={() => setOpen(false)}>
      <DrawerNav style={{ width: `${dementions.x / 2}px` || "160px" }}>
        <div className=" blueBlock">
          <Image src="/logo.png" alt="logo" width={135} height={58} />
        </div>
        <ul>
          {links.map(({ title, href }) => (
            <li key={title}>
              <Link href={href} scroll={true}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </DrawerNav>
    </Drawer>
  );
};
