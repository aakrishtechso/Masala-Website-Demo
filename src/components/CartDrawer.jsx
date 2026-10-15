import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onBrowseSpices
}) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(null);
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    paymentMethod: 'cod'
  });
  const [checkoutErrors, setCheckoutErrors] = useState({});

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.selectedWeight.price * item.quantity,
    0
  );

  const freeShippingThreshold = 499;
  const amountNeeded = freeShippingThreshold - subtotal;
  const hasFreeShipping = subtotal >= freeShippingThreshold;
  const shippingCost = hasFreeShipping || subtotal === 0 ? 0 : 50;
  const totalAmount = subtotal + shippingCost;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!checkoutData.name.trim()) errs.name = 'Please provide full name';
    if (!checkoutData.phone.trim() || checkoutData.phone.length < 10) {
      errs.phone = 'Valid 10-digit mobile number required';
    }
    if (!checkoutData.address.trim()) errs.address = 'Delivery address is required';
    if (!checkoutData.pincode.trim() || checkoutData.pincode.length < 6) {
      errs.pincode = 'Valid 6-digit PIN code required';
    }

    if (Object.keys(errs).length > 0) {
      setCheckoutErrors(errs);
      return;
    }

    // Generate simulated order receipt
    const orderNumber = `VEDA-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderConfirmed({
      orderNumber,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      customer: checkoutData.name,
      address: checkoutData.address,
      pincode: checkoutData.pincode,
      paymentMethod: checkoutData.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'Instant UPI / Card',
      items: [...cartItems],
      total: totalAmount
    });
    onClearCart();
    setIsCheckingOut(false);
  };

  const resetAll = () => {
    setOrderConfirmed(null);
    setIsCheckingOut(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col text-left border-l border-[#EAE0D5]">
          
          {/* Header */}
          <div className="p-5 border-b border-[#EAE0D5] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#991B1B]" />
              <h2 className="text-lg font-serif font-bold text-[#2A1D17]">
                Your Spice Pantry
              </h2>
              {cartItems.length > 0 && (
                <span className="text-xs text-[#7A5B49] font-medium">
                  ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#7A5B49] hover:text-[#2A1D17] hover:bg-[#F4EFEA] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          {cartItems.length > 0 && !orderConfirmed && (
            <div className="bg-[#FAF2E8] px-5 py-3 border-b border-[#EAE0D5] text-xs">
              {hasFreeShipping ? (
                <div className="flex items-center gap-2 text-[#15803D] font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Congratulations! You qualify for complimentary shipping.</span>
                </div>
              ) : (
                <div>
                  <p className="text-[#8C6D58]">
                    Add <span className="font-bold text-[#991B1B] tabular-nums">₹{amountNeeded}</span> more of fresh spices for free shipping.
                  </p>
                  <div className="w-full bg-[#E5DACF] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-[#CA8A04] h-full transition-all duration-300 rounded-full"
                      style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5">
            
            {/* 1. Order Confirmed State */}
            {orderConfirmed ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2A1D17]">
                  Order Placed Successfully!
                </h3>
                <p className="text-xs font-mono font-medium text-[#7A5B49] bg-white py-1.5 px-3 rounded border border-[#EAE0D5] inline-block">
                  Reference: {orderConfirmed.orderNumber}
                </p>
                <div className="bg-white p-4 rounded-xl border border-[#EAE0D5] text-left text-xs space-y-2 mt-4 text-[#5A4333]">
                  <div className="flex justify-between border-b border-[#F4EFEA] pb-2">
                    <span className="text-[#7A5B49]">Recipient:</span>
                    <span className="font-semibold text-[#2A1D17]">{orderConfirmed.customer}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#F4EFEA] pb-2">
                    <span className="text-[#7A5B49]">Payment Mode:</span>
                    <span className="font-semibold text-[#2A1D17]">{orderConfirmed.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#F4EFEA] pb-2">
                    <span className="text-[#7A5B49]">Delivery To:</span>
                    <span className="font-semibold text-[#2A1D17] text-right truncate max-w-[200px]">
                      {orderConfirmed.address}, {orderConfirmed.pincode}
                    </span>
                  </div>
                  <div className="flex justify-between pt-1 text-sm font-bold text-[#2A1D17]">
                    <span>Total Amount:</span>
                    <span>₹{orderConfirmed.total}</span>
                  </div>
                </div>
                <div className="p-3 bg-amber-50 text-amber-900 text-[11px] rounded-lg border border-amber-200">
                  Notice: This is a simulated checkout demonstration. No payment has been processed.
                </div>
                <button
                  onClick={resetAll}
                  className="w-full py-3 bg-[#991B1B] text-white text-xs font-semibold uppercase tracking-wider rounded-lg mt-4"
                >
                  Continue Browsing
                </button>
              </div>
            ) : isCheckingOut ? (
              /* 2. Checkout Form */
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#EAE0D5]">
                  <h3 className="text-sm font-serif font-bold text-[#2A1D17]">
                    Shipping & Payment Details
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#991B1B] hover:underline"
                  >
                    &larr; Back to Cart
                  </button>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4A3525] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={checkoutData.name}
                    onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                    placeholder="Aarav Sharma"
                    className="w-full px-3 py-2 text-xs rounded border border-[#D4C5B9] bg-white text-[#2A1D17]"
                  />
                  {checkoutErrors.name && (
                    <p className="text-[10px] text-red-600 mt-0.5">{checkoutErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4A3525] mb-1">
                    10-Digit Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={checkoutData.phone}
                    onChange={(e) => setCheckoutData({ ...checkoutData, phone: e.target.value })}
                    placeholder="9876543210"
                    className="w-full px-3 py-2 text-xs rounded border border-[#D4C5B9] bg-white text-[#2A1D17]"
                  />
                  {checkoutErrors.phone && (
                    <p className="text-[10px] text-red-600 mt-0.5">{checkoutErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4A3525] mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    rows={2}
                    value={checkoutData.address}
                    onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
                    placeholder="House/Flat No., Street, Landmark"
                    className="w-full px-3 py-2 text-xs rounded border border-[#D4C5B9] bg-white text-[#2A1D17]"
                  />
                  {checkoutErrors.address && (
                    <p className="text-[10px] text-red-600 mt-0.5">{checkoutErrors.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4A3525] mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    value={checkoutData.pincode}
                    onChange={(e) => setCheckoutData({ ...checkoutData, pincode: e.target.value })}
                    placeholder="110001"
                    maxLength={6}
                    className="w-full px-3 py-2 text-xs rounded border border-[#D4C5B9] bg-white text-[#2A1D17]"
                  />
                  {checkoutErrors.pincode && (
                    <p className="text-[10px] text-red-600 mt-0.5">{checkoutErrors.pincode}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4A3525] mb-1.5">
                    Select Payment Method
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 p-2.5 rounded border border-[#D4C5B9] bg-white cursor-pointer text-xs">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={checkoutData.paymentMethod === 'cod'}
                        onChange={() => setCheckoutData({ ...checkoutData, paymentMethod: 'cod' })}
                        className="text-[#991B1B]"
                      />
                      <div>
                        <span className="font-semibold text-[#2A1D17] block">Cash on Delivery (COD)</span>
                        <span className="text-[10px] text-[#7A5B49]">Pay cash or UPI upon package handover</span>
                      </div>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded border border-[#D4C5B9] bg-white cursor-pointer text-xs">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={checkoutData.paymentMethod === 'upi'}
                        onChange={() => setCheckoutData({ ...checkoutData, paymentMethod: 'upi' })}
                        className="text-[#991B1B]"
                      />
                      <div>
                        <span className="font-semibold text-[#2A1D17] block">Instant UPI / Cards [Demo]</span>
                        <span className="text-[10px] text-[#7A5B49]">Fast digital payment simulation</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm"
                  >
                    Confirm & Place Order (₹{totalAmount})
                  </button>
                </div>
              </form>
            ) : cartItems.length === 0 ? (
              /* 3. Empty Cart State */
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white text-[#8C6D58] flex items-center justify-center mx-auto border border-[#EAE0D5]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#2A1D17]">
                  Your cart is empty
                </h3>
                <p className="text-xs text-[#5A4333] max-w-xs mx-auto">
                  Add some of our freshly milled single-origin spices and royal masalas to get started.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    if (onBrowseSpices) onBrowseSpices();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#991B1B] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-xs"
                >
                  <span>Browse Spices</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              /* 4. Active Cart Item List */
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedWeight.size}`}
                    className="flex gap-3.5 p-3.5 bg-white rounded-xl border border-[#EAE0D5] relative"
                  >
                    {/* Item Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#F4EFEA] shrink-0 border border-[#EAE0D5]">
                      <ImageWithFallback
                        src={item.imageUrl}
                        alt={item.name}
                        aspectRatio="aspect-square"
                        fallbackIcon="spice"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-serif font-bold text-[#2A1D17] truncate">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.id, item.selectedWeight.size)}
                            className="text-[#9E8B7E] hover:text-[#991B1B] p-0.5"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[10px] text-[#7A5B49] font-medium">
                          Pack: {item.selectedWeight.size} · ₹{item.selectedWeight.price} each
                        </p>
                      </div>

                      {/* Quantity Stepper & Price */}
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#F4EFEA]">
                        <div className="flex items-center border border-[#E0D5C7] rounded bg-[#FAF7F2]">
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.id,
                                item.selectedWeight.size,
                                item.quantity - 1
                              )
                            }
                            className="px-2 py-0.5 text-[#5A4333] hover:text-[#2A1D17]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-[#2A1D17] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.id,
                                item.selectedWeight.size,
                                item.quantity + 1
                              )
                            }
                            className="px-2 py-0.5 text-[#5A4333] hover:text-[#2A1D17]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-serif font-bold text-[#2A1D17] tabular-nums">
                          ₹{item.selectedWeight.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Footer Subtotal & Action */}
          {cartItems.length > 0 && !orderConfirmed && !isCheckingOut && (
            <div className="p-5 border-t border-[#EAE0D5] bg-white space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#5A4333]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2A1D17] tabular-nums">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#5A4333]">
                  <span>Shipping</span>
                  <span className="font-semibold text-[#2A1D17] tabular-nums">
                    {shippingCost === 0 ? (
                      <span className="text-emerald-700">FREE</span>
                    ) : (
                      `₹${shippingCost}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-serif font-bold text-[#2A1D17] pt-2 border-t border-[#EAE0D5]">
                  <span>Total Amount</span>
                  <span className="tabular-nums">₹{totalAmount}</span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#7A5B49] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
                <span>100% Secure Checkout · Freshness Locked</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
