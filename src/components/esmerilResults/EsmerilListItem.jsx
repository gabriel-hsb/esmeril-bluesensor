const EsmerilListItem = ({ title, value, children }, ...props) => {
  return (
    <li {...props} className="mb-1 w-full border-b p-1">
      <span className="text-muted-foreground">{title}:</span>{" "}
      <span className="text-lg sm:text-xl">{value}</span>
      {children}
    </li>
  );
};

export default EsmerilListItem;
