{/* <div id="parent">
    <div id="child">
<h1 id="heading1">Im in h1 tag</h1>
<h2 id="heading2"> Im in h2 tag</h2>
</div>
</div> */}



// const heading=React.createElement("h1",{id:"heading",abc:"xyz"},"inside h1");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const heading =React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading1"},"Im in h1 tag "),
React.createElement("h2",{id:"heading2"},"Im in h2")
]
));
ReactDOM.render(heading,document.getElementById("root"))