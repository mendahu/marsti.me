import { useState } from "react";
import ContentItem from "./ContentItem/ContentItem";
import NavItem from "./NavItem/NavItem";
import styles from "./styles/VerticalMenu.module.css";

export type NavItem = {
  label: string;
  id: string;
};

export type ContentItem = {
  id: string;
  text: JSX.Element;
};

export type VerticalMenuProps = {
  navItems: NavItem[];
  content: ContentItem[];
};

export default function VerticalMenu(props: VerticalMenuProps) {
  const [selectedItem, setSelectedItem] = useState(props.navItems[0].id);

  return (
    <div className={styles.root}>
      <nav className={styles.nav}>
        <ul>
          {props.navItems.map((item) => (
            <NavItem
              key={item.id}
              label={item.label}
              selected={item.id === selectedItem}
              onClick={() => setSelectedItem(item.id)}
            />
          ))}
        </ul>
      </nav>
      <div className={styles.content}>
        {props.content.map((contentItem) => (
          <ContentItem
            key={contentItem.id}
            text={contentItem.text}
            selected={contentItem.id === selectedItem}
          />
        ))}
      </div>
    </div>
  );
}
