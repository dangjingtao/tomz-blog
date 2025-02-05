import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useState } from "preact/hooks";
import loadIcon from "@/lib/loadIcon.tsx";

export default function NestedList({ directoryTree = [], docSpace }) {
  const [open, setOpen] = useState({});

  const handleClick = (index) => {
    setOpen((prevOpen) => ({ ...prevOpen, [index]: !prevOpen[index] }));
  };

  const renderListItems = (items, level = 0) => {
    return items.map((item, index) => (
      <div key={item.name}>
        <ListItemButton
          disableRipple
          component="a"
          className={item.path && "aria-[current]:bg-gray-100"}
          href={item.path && "/docs/" + item.path}
          sx={{ py: 0, minHeight: 32, pl: level * 2 + 2 }}
          onClick={item.children
            ? () => handleClick(`${level}-${index}`)
            : undefined}
        >
          <ListItemText primary={item.name} />
          {item.children &&
            (open[`${level}-${index}`]
              ? loadIcon("ChevronUp")
              : loadIcon("ChevronDown"))}
        </ListItemButton>
        {item.children && (
          <Collapse in={open[`${level}-${index}`]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderListItems(item.children, level + 1)}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  return (
    <aside class="relative py-4 text-gray-600 h-full shadow-lg transition-all duration-100 bg-white w-[270px]">
      <List
        sx={{ width: "100%", maxWidth: 270, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <h2 class="text-lg text-slate-900 mb-5">{docSpace}</h2>
          </ListSubheader>
        }
      >
        {renderListItems(directoryTree)}
      </List>
    </aside>
  );
}
