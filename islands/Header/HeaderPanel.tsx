import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "preact/hooks";

const cards = [
  {
    id: 1,
    title: "Document Center",
    description: "文档中心",
    href: "/docs",
  },
  {
    id: 2,
    title: "Acknowledge",
    description: "知识库",
    href: "/docs/acknowledge",
  },
  {
    id: 3,
    title: "Tomz-blog",
    description: "Humans depend on plants and animals for survival.",
    href: "/docs/tomz-blog",
  },
  {
    id: 4,
    title: "Open-proxy-api",
    description: "Humans depend on plants and animals for survival.",
    href: "/docs/open-proxy-api/guide/install",
  },
  // {
  //   id: 6,
  //   title: "Open-proxy-api",
  //   description: "Humans depend on plants and animals for survival.",

  // },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <div class="py-3 px-10 flex gap-5">
      {cards.map((card, index) => (
        <a href={card.href}>
          <Card variant="outlined">
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                width: 300,
                height: 120,
              }}
            >
              <CardContent sx={{ height: "100%" }}>
                <Typography
                  style={{ fontSize: 22 }}
                  variant="h5"
                  component="div"
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </a>
      ))}
    </div>
  );
}

export default SelectActionCard;
