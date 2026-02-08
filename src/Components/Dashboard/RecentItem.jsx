function RecentItem({ name, date, price, payment, children, icon }) {
  return (
    <li className="recentitem">
      <div>
        {children}
        <div>
          <span>{name}</span>
          <span className="date">{date}</span>
        </div>
      </div>

      <div className="price">
        <span>${price}</span>
        <span className="payment">{payment}</span>
      </div>
    </li>
  );
}

export default RecentItem;
