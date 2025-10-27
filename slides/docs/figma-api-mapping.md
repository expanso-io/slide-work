// Pseudo-code for this slide
{
  // Create two distinct auto-layout frames
  upstream_frame: {
    layout: "vertical",
    alignment: "center",
    border_style: "dashed", // Key differentiator
    fills: [translucent_red]
  },
  
  downstream_frame: {
    layout: "vertical", 
    border_style: "solid",
    fills: [translucent_blue],
    children: [
      category_grid_1: {layout: "horizontal", gap: 24},
      category_grid_2: {layout: "horizontal", gap: 24}
    ]
  },
  
  // Vector arrow connects frames
  arrow: {
    type: "vector",
    stroke: {weight: 6, color: gray},
    points: [upstream.right, downstream.left]
  }
}
