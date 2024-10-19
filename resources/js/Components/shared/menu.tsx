import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";
import { TooltipContentDisabled } from "./tooltip-content-disabled";

export function Menu() {
  return (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Discover</MenubarTrigger>
        <MenubarContent>
          <TooltipContentDisabled>
            <MenubarItem>About</MenubarItem>
          </TooltipContentDisabled>
          <MenubarSeparator />
          <TooltipContentDisabled>
            <MenubarItem>
              Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
          </TooltipContentDisabled>
          <MenubarSeparator />
          <TooltipContentDisabled>
            <MenubarItem>
              Hide... <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
          </TooltipContentDisabled>
          <TooltipContentDisabled>
            <MenubarItem>
              Quit <MenubarShortcut>⌘Q</MenubarShortcut>
            </MenubarItem>
          </TooltipContentDisabled>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="relative">Articles</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Categories</MenubarSubTrigger>
            <MenubarSubContent className="w-[230px]">
              <TooltipContentDisabled>
                <MenubarItem>Tech</MenubarItem>
              </TooltipContentDisabled>
              <TooltipContentDisabled>
                <MenubarItem>Business</MenubarItem>
              </TooltipContentDisabled>
              <TooltipContentDisabled>
                <MenubarItem>Lifestyle</MenubarItem>
              </TooltipContentDisabled>
              <TooltipContentDisabled>
                <MenubarItem>Health</MenubarItem>
              </TooltipContentDisabled>
              <TooltipContentDisabled>
                <MenubarItem>Entertainment</MenubarItem>
              </TooltipContentDisabled>
            </MenubarSubContent>
          </MenubarSub>
          <TooltipContentDisabled>
            <MenubarItem>Latest Articles</MenubarItem>
          </TooltipContentDisabled>
          <TooltipContentDisabled>
            <MenubarItem>Popular Articles</MenubarItem>
          </TooltipContentDisabled>
          <MenubarSeparator />
          <TooltipContentDisabled>
            <MenubarItem>Archives</MenubarItem>
          </TooltipContentDisabled>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <TooltipContentDisabled>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
          </TooltipContentDisabled>
          <TooltipContentDisabled>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
          </TooltipContentDisabled>
          <MenubarSeparator />
          <TooltipContentDisabled>
            <MenubarItem>
              Cut <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
          </TooltipContentDisabled>
          <TooltipContentDisabled>
            <MenubarItem>
              Copy <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
          </TooltipContentDisabled>
          <TooltipContentDisabled>
            <MenubarItem>
              Paste <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </TooltipContentDisabled>
          <MenubarSeparator />
          <TooltipContentDisabled>
            <MenubarItem>
              Select All <MenubarShortcut>⌘A</MenubarShortcut>
            </MenubarItem>
          </TooltipContentDisabled>
          <TooltipContentDisabled>
            <MenubarItem>
              Deselect All <MenubarShortcut>⇧⌘A</MenubarShortcut>
            </MenubarItem>
          </TooltipContentDisabled>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <TooltipContentDisabled>
            <MenubarCheckboxItem>Show Comments</MenubarCheckboxItem>
          </TooltipContentDisabled>
          <TooltipContentDisabled>
            <MenubarCheckboxItem checked>Show Author Info</MenubarCheckboxItem>
          </TooltipContentDisabled>
          <MenubarSeparator />
          <TooltipContentDisabled>
            <MenubarItem inset>Show Sidebar</MenubarItem>
          </TooltipContentDisabled>
          <MenubarSeparator />
          <TooltipContentDisabled>
            <MenubarItem inset>Enter Full Screen</MenubarItem>
          </TooltipContentDisabled>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hidden md:block">Account</MenubarTrigger>
        <MenubarContent forceMount>
          <TooltipContentDisabled>
            <MenubarLabel inset>Switch Account</MenubarLabel>
          </TooltipContentDisabled>
          <MenubarSeparator />
          <MenubarRadioGroup value="benoit">
            <TooltipContentDisabled>
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            </TooltipContentDisabled>
            <TooltipContentDisabled>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            </TooltipContentDisabled>
            <TooltipContentDisabled>
              <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            </TooltipContentDisabled>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <TooltipContentDisabled>
            <MenubarItem inset>Manage Family...</MenubarItem>
          </TooltipContentDisabled>
          <MenubarSeparator />
          <TooltipContentDisabled>
            <MenubarItem inset>Add Account...</MenubarItem>
          </TooltipContentDisabled>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
