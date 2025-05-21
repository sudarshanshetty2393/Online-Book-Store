import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: '', category: '', description: '', price: '', imageURL: '', stock: '' });
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/api/products/${editingId}`, form, { headers: { Authorization: token } });
      alert('Product Updated');
    } else {
      await axios.post('http://localhost:5000/api/products', form, { headers: { Authorization: token } });
      alert('Product Added');
    }
    setForm({ title: '', category: '', description: '', price: '', imageURL: '', stock: '' });
    setEditingId(null);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`, { headers: { Authorization: token } });
    alert('Product Deleted');
    fetchProducts();
  };

  return (
    <div>
      <h2>Admin - Manage Products</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required /><br />
        <input name="category" placeholder="Category (Book/Movie)" value={form.category} onChange={handleChange} required /><br />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} /><br />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required /><br />
        <input name="imageURL" placeholder="Image URL" value={form.imageURL} onChange={handleChange} /><br />
        <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} /><br />
        <button type="submit">{editingId ? 'Update' : 'Add'} Product</button>
      </form>

      <h3>Products List</h3>
      {products.map((p) => (
        <div key={p._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h4>{p.title} ({p.category})</h4>
          <p>₹{p.price}</p>
          <button onClick={() => handleEdit(p)}>Edit</button>
          <button onClick={() => handleDelete(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminProducts;
