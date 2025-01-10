const EsmerilListItem = ({ title, value }) => {
  return (
    <li className="w-full p-1 mb-1 border-b">
      <span className="text-muted-foreground">{title}:</span>{" "}
      <span className="text-lg sm:text-xl">{value}</span>
    </li>
  );
};

export default EsmerilListItem;
