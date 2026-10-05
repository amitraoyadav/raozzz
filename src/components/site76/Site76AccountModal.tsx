import React, { useState } from 'react';
import { X, Package, MapPin, User, ShieldCheck, Heart, LogOut, CheckCircle2, Clock } from 'lucide-react';
import { site76Config } from '../../config/site76Config';

interface Site76AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  placedOrders: any[];
  onOpenWishlist: () => void;
}

export const Site76AccountModal: React.FC<Site76AccountModalProps> = ({
  isOpen,
  onClose,
  placedOrders,
  onOpenWishlist
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'profile'>('orders');

  // Stored Mock Addresses
  const [addresses, setAddresses] = useState([
    {
      id: 'addr-1',
      title: 'Home Atelier',
      name: 'Radhika Sen',
      phone: '+91 98112 34567',
      line: 'Flat 4B, Gulmohar Enclave, Ring Road',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110049',
      isDefault: true
    }
  ]);

  const [newAddrForm, setNewAddrForm] = useState(false);
  const [newTitle, setNewTitle] = useState('Work');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newLine, setNewLine] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newPincode, setNewPincode] = useState('');

  if (!isOpen) return null;

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newLine || !newCity || !newPincode) return;
    setAddresses(prev => [
      ...prev,
      {
        id: `addr-${Date.now()}`,
        title: newTitle,
        name: newName,
        phone: newPhone || '+91 98765 43210',
        line: newLine,
        city: newCity,
        state: 'Delhi',
        pincode: newPincode,
        isDefault: false
      }
    ]);
    setNewAddrForm(false);
  };

  // Combine placed orders with realistic initial order history
  const allDisplayOrders = [
    ...placedOrders,
    {
      orderId: 'AE-821940',
      date: '18 September 2026',
      status: 'Delivered · Plastic-Free Courier',
      totalAmount: 9340,
      paymentMethod: 'UPI (GPay)',
      items: [
        { product: { name: 'Unbleached Khadi Tiered Maxi Dress' }, size: 'S', color: 'Unbleached Ecru', quantity: 1, productPrice: 4850 },
        { product: { name: 'Pure French Linen Relaxed Kurta' }, size: 'M', color: 'Forest Moss', quantity: 1, productPrice: 4490 }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FDFBF7] rounded-3xl max-w-2xl w-full border border-[#E8E1D5] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#E8E1D5] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#263422] text-[#FDFBF7] flex items-center justify-center font-bold font-mono text-sm">
              AE
            </div>
            <div>
              <h2 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1E1F21]">
                Conscious Wardrobe Account
              </h2>
              <span className="text-[11px] text-[#6F736D]">
                Radhika Sen · Seedling Member (Carbon Offset: 42 kg)
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#6F736D] hover:text-[#1E1F21] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-[#F5EFEB] px-6 py-2 border-b border-[#E8E1D5] flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`py-2 px-3 rounded-lg transition-colors flex items-center gap-1.5 ${activeTab === 'orders' ? 'bg-[#263422] text-white' : 'text-[#544133] hover:text-black'}`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>My Orders ({allDisplayOrders.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('addresses')}
            className={`py-2 px-3 rounded-lg transition-colors flex items-center gap-1.5 ${activeTab === 'addresses' ? 'bg-[#263422] text-white' : 'text-[#544133] hover:text-black'}`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Saved Addresses</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`py-2 px-3 rounded-lg transition-colors flex items-center gap-1.5 ${activeTab === 'profile' ? 'bg-[#263422] text-white' : 'text-[#544133] hover:text-black'}`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Conscious Profile</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* TAB 1: ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#6F736D]">
                <span>Showing your recent small-batch artisan orders</span>
              </div>

              {allDisplayOrders.map((ord, idx) => (
                <div key={idx} className="p-4 bg-white rounded-2xl border border-[#E8E1D5] space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E1D5] pb-2 text-xs">
                    <div>
                      <span className="font-bold text-[#1E1F21] font-mono text-sm block">
                        #{ord.orderId}
                      </span>
                      <span className="text-[11px] text-[#6F736D]">{ord.date}</span>
                    </div>

                    <div className="text-right">
                      <span className="font-mono font-bold text-sm text-[#1E1F21] block tabular-nums">
                        ₹{ord.totalAmount.toLocaleString('en-IN')}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#586737] font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        {ord.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    {ord.items.map((it: any, i: number) => (
                      <div key={i} className="flex justify-between text-[#544133]">
                        <span>
                          {it.product?.name || it.name} ({it.size || 'M'} · {it.color || 'Natural'}) × {it.quantity || 1}
                        </span>
                        <span className="font-mono">
                          ₹{((it.product?.price || it.productPrice || 3500) * (it.quantity || 1)).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-[#E8E1D5] flex items-center justify-between text-[11px]">
                    <span className="text-[#6F736D]">Payment: {ord.paymentMethod}</span>
                    <a
                      href={`https://wa.me/${site76Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(`Hello Concierge, inquiry regarding tracking for Order #${ord.orderId}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C16A52] hover:underline font-semibold"
                    >
                      Track on WhatsApp →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: ADDRESSES */}
          {activeTab === 'addresses' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1E1F21]">Saved Delivery Addresses</span>
                <button
                  type="button"
                  onClick={() => setNewAddrForm(!newAddrForm)}
                  className="text-xs text-[#C16A52] font-semibold hover:underline"
                >
                  {newAddrForm ? 'Cancel' : '+ Add New Address'}
                </button>
              </div>

              {newAddrForm && (
                <form onSubmit={handleAddAddress} className="p-4 bg-white rounded-xl border border-[#D5C7B5] space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#1E1F21] mb-1">Label (Home/Studio)</label>
                      <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1E1F21] mb-1">Recipient Name</label>
                      <input
                        type="text"
                        required
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#1E1F21] mb-1">Address Line</label>
                    <input
                      type="text"
                      required
                      value={newLine}
                      onChange={(e) => setNewLine(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#1E1F21] mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={newCity}
                        onChange={(e) => setNewCity(e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1E1F21] mb-1">PIN Code</label>
                      <input
                        type="text"
                        required
                        value={newPincode}
                        onChange={(e) => setNewPincode(e.target.value)}
                        className="w-full p-2 border rounded font-mono"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#263422] text-white rounded text-xs font-semibold"
                  >
                    Save Address
                  </button>
                </form>
              )}

              <div className="space-y-3">
                {addresses.map(addr => (
                  <div key={addr.id} className="p-4 bg-white rounded-xl border border-[#E8E1D5] flex items-start justify-between text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#1E1F21]">{addr.title}</span>
                        {addr.isDefault && (
                          <span className="px-2 py-0.5 bg-[#F5EFEB] text-[#586737] rounded text-[10px] font-semibold">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="font-medium text-[#1E1F21]">{addr.name} · {addr.phone}</p>
                      <p className="text-[#6F736D]">{addr.line}, {addr.city} {addr.pincode}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CONSCIOUS PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-4 text-xs text-[#544133]">
              <div className="p-4 bg-white rounded-2xl border border-[#E8E1D5] space-y-3">
                <span className="font-semibold text-xs text-[#1E1F21] block uppercase tracking-wider">
                  Impact Dashboard
                </span>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-[#F5EFEB] rounded-xl">
                    <span className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21] block">
                      3 Pieces
                    </span>
                    <span className="text-[10px] text-[#6F736D]">Artisan Handcrafted</span>
                  </div>
                  <div className="p-3 bg-[#F5EFEB] rounded-xl">
                    <span className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#586737] block">
                      0 Grams
                    </span>
                    <span className="text-[10px] text-[#6F736D]">Microplastics Shed</span>
                  </div>
                  <div className="p-3 bg-[#F5EFEB] rounded-xl">
                    <span className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#C16A52] block">
                      4,200 L
                    </span>
                    <span className="text-[10px] text-[#6F736D]">Freshwater Conserved</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F5EFEB] rounded-2xl border border-[#E8E1D5] space-y-2">
                <span className="font-bold text-[#1E1F21] block">Atelier Concierge Hotline:</span>
                <p className="text-[11px] text-[#6F736D]">
                  Need bespoke sizing or personalized textile pairing consultation? Reach our Delhi studio directly.
                </p>
                <p className="font-mono text-xs font-semibold text-[#1E1F21]">{site76Config.PHONE_DISPLAY}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
