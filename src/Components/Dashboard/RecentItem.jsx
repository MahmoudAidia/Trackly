function RecentItem({ value, date, desc, payment, children, category }) {
  return (
    <li className="recentitem">
      <div>
        {children}
        <div>
          <span>{category}</span>
          <span className="date">{desc}</span>
        </div>
      </div>

      <div className="price">
        <span>${value}</span>
        <span className="payment">{date}</span>
      </div>
    </li>
  );
}

export default RecentItem;
