import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Chip, CircularProgress, Divider, Grid, Paper, TextField, Typography } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PublishIcon from "@material-ui/icons/Publish";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const emptyProduct = { id: "", name: "", description: "", categories: [], features: [], img: "", gallery: [] };

const useStyles = makeStyles((theme) => ({
  page: { background: "#fffaf6", minHeight: "100vh", padding: "7rem 1.5rem 5rem" },
  container: { maxWidth: 1180, margin: "0 auto" },
  eyebrow: { color: "#e29a56", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "0.75rem" },
  title: { color: "#525252", fontFamily: "Gilroy, sans-serif", fontSize: "clamp(2.3rem, 5vw, 4rem)", fontWeight: 700, margin: "0.35rem 0 0.5rem" },
  subtitle: { color: "#7d7d7d", fontSize: "1.05rem", maxWidth: 650, lineHeight: 1.7, marginBottom: "2rem" },
  card: { borderRadius: 18, padding: theme.spacing(3), border: "1px solid #f3e4d7", boxShadow: "0 14px 45px rgba(152, 100, 58, 0.08)", background: "#fff" },
  sectionTitle: { color: "#525252", fontSize: "1.35rem", fontWeight: 700, marginBottom: theme.spacing(2) },
  field: { "& .MuiOutlinedInput-root": { borderRadius: 10, background: "#fffdfb" }, "& .MuiInputLabel-outlined": { color: "#9d8c7d" }, marginBottom: theme.spacing(2) },
  uploadBox: { border: "1px dashed #e7b27f", borderRadius: 12, padding: theme.spacing(2), background: "#fffaf6", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: theme.spacing(2), [theme.breakpoints.down("xs")]: { alignItems: "flex-start", flexDirection: "column" } },
  hiddenInput: { display: "none" },
  fileText: { color: "#8a7a6e", fontSize: "0.9rem", lineHeight: 1.5 },
  primaryButton: { color: "#fff", background: "#f3aa68", borderRadius: 10, padding: "12px 22px", fontWeight: 700, boxShadow: "none", "&:hover": { background: "#e99a54", boxShadow: "none" }, "&:disabled": { color: "#fff", background: "#e5c5a5" } },
  secondaryButton: { color: "#d88944", borderColor: "#eab681", borderRadius: 10, fontWeight: 700 },
  deleteButton: { color: "#c96d67", borderColor: "#e8b7b2", borderRadius: 10, fontWeight: 700, marginTop: 8 },
  status: { borderRadius: 10, padding: "12px 16px", margin: "16px 0", color: "#6d5746", background: "#fff0df" },
  productCard: { height: "100%", borderRadius: 14, overflow: "hidden", border: "1px solid #f1e5dc", background: "#fff" },
  productImage: { width: "100%", height: 145, objectFit: "cover", display: "block", background: "#fff5eb" },
  productBody: { padding: theme.spacing(1.75) },
  productName: { color: "#525252", fontWeight: 700, marginBottom: 8 },
  chip: { margin: "0 5px 5px 0", background: "#fff0df", color: "#bd7335", fontSize: "0.72rem" },
  tagInput: { display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 },
  tagList: { minHeight: 34, marginBottom: 18 },
  removeTag: { cursor: "pointer", marginLeft: 6, fontWeight: 700 },
  empty: { color: "#94877d", textAlign: "center", padding: "2rem 1rem" },
}));

export default function ProductAdmin() {
  const classes = useStyles();
  const [key, setKey] = useState("");
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyProduct);
  const [editingId, setEditingId] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [categoryInput, setCategoryInput] = useState("");
  const [featureInput, setFeatureInput] = useState("");
  const [fileInputKey, setFileInputKey] = useState(0);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") setKey(new URLSearchParams(window.location.search).get("key") || "");
  }, []);

  useEffect(() => {
    if (!key) return;
    fetch(`/api/admin/products?key=${encodeURIComponent(key)}`)
      .then((response) => response.ok ? response.json() : null)
      .then((current) => { if (Array.isArray(current)) setProducts(current); })
      .catch(() => setStatus("Could not load products. Check your admin URL and environment variables."));
  }, [key]);

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const addTag = (field, value, clear) => {
    const tag = value.trim();
    if (tag && !form[field].includes(tag)) setForm({ ...form, [field]: [...form[field], tag] });
    clear("");
  };
  const tagKeyDown = (event, field, value, clear) => {
    if (event.key === "Enter" || event.key === ",") { event.preventDefault(); addTag(field, value, clear); }
  };
  const removeTag = (field, tag) => setForm({ ...form, [field]: form[field].filter((item) => item !== tag) });
  const edit = (product) => { setEditingId(product.id); setForm({ ...product, categories: product.categories || [], features: product.features || [], gallery: product.gallery || [] }); setMainImage(null); setGalleryFiles([]); };
  const reset = () => { setEditingId(""); setForm(emptyProduct); setMainImage(null); setGalleryFiles([]); setCategoryInput(""); setFeatureInput(""); setFileInputKey((value) => value + 1); };

  async function deleteProduct() {
    if (!editingId || !window.confirm(`Delete ${form.name}? This will remove it from the live catalogue.`)) return;
    setBusy(true); setStatus("");
    try {
      const response = await fetch(`/api/admin/products?key=${encodeURIComponent(key)}`, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: editingId }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setProducts(products.filter((product) => product.id !== editingId)); reset(); setStatus(`${form.name} was removed from the live catalogue.`);
    } catch (error) { setStatus(error.message); }
    finally { setBusy(false); }
  }

  async function uploadImages(productFolder, files) {
    if (!files.length) return [];
    const signatureResponse = await fetch(`/api/admin/cloudinary-signature?key=${encodeURIComponent(key)}&productFolder=${encodeURIComponent(productFolder)}`);
    const signature = await signatureResponse.json();
    if (!signatureResponse.ok) throw new Error(signature.error);
    return Promise.all(files.map(async (file) => {
      const data = new FormData();
      data.append("file", file); data.append("api_key", signature.apiKey); data.append("timestamp", signature.timestamp);
      data.append("folder", signature.folder); data.append("signature", signature.signature);
      const response = await fetch(`https://api.cloudinary.com/v1_1/${signature.cloudName}/image/upload`, { method: "POST", body: data });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error?.message || "Image upload failed");
      return result.secure_url;
    }));
  }

  async function publish(event) {
    event.preventDefault(); setBusy(true); setStatus("");
    try {
      if (!key) throw new Error("Open this page with ?key=YOUR_ADMIN_UPLOAD_KEY");
      const productId = (form.id || form.name).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      const uploadedMain = await uploadImages(productId, mainImage ? [mainImage] : []);
      const uploadedGallery = await uploadImages(productId, galleryFiles);
      const product = {
        id: productId, name: form.name.trim(), description: form.description.trim(),
        categories: form.categories, features: form.features,
        img: uploadedMain[0] || form.img, gallery: [...form.gallery, ...uploadedGallery],
      };
      if (!product.name || !product.description || !product.img || !product.categories.length || !product.features.length) throw new Error("Name, description, main image, categories and features are required.");
      const next = [...products.filter((item) => item.id !== product.id), product];
      const response = await fetch(`/api/admin/products?key=${encodeURIComponent(key)}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(next) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setProducts(next); reset(); setStatus(`${product.name} is published and live in the products section.`);
    } catch (error) { setStatus(error.message); }
    finally { setBusy(false); }
  }

  return <>
    <Head><title>Product Admin | JambarOverseas</title><meta name="robots" content="noindex,nofollow" /></Head>
    <Layout solidNav>
      <div className={classes.page}>
        <div className={classes.container}>
          <Typography className={classes.eyebrow}>JambarOverseas catalogue</Typography>
          <h1 className={classes.title}>Product studio</h1>
          <p className={classes.subtitle}>Create and publish beautiful product listings directly to your live catalogue. Images are securely stored in Cloudinary.</p>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Paper className={classes.card} elevation={0}>
                <Typography className={classes.sectionTitle}>{form.name ? "Edit product" : "Add a new product"}</Typography>
                <form onSubmit={publish}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}><TextField className={classes.field} fullWidth variant="outlined" label="Product name *" name="name" value={form.name} onChange={update} required /></Grid>
                    <Grid item xs={12} sm={6}><TextField className={classes.field} fullWidth variant="outlined" label="Product ID (optional)" name="id" value={form.id} onChange={update} placeholder="e.g. basmati-rice" /></Grid>
                  </Grid>
                  <TextField className={classes.field} fullWidth multiline rows={4} variant="outlined" label="Description *" name="description" value={form.description} onChange={update} required />
                  <Typography style={{ color: "#6d5c4e", fontWeight: 700, marginBottom: 8 }}>Categories *</Typography>
                  <div className={classes.tagInput}><TextField className={classes.field} fullWidth variant="outlined" value={categoryInput} onChange={(event) => setCategoryInput(event.target.value)} onKeyDown={(event) => tagKeyDown(event, "categories", categoryInput, setCategoryInput)} placeholder="Example: Spices" /><Button type="button" variant="outlined" className={classes.secondaryButton} onClick={() => addTag("categories", categoryInput, setCategoryInput)}>Add</Button></div>
                  <div className={classes.tagList}>{form.categories.map((category) => <Chip key={category} className={classes.chip} label={category} onDelete={() => removeTag("categories", category)} />)}</div>
                  <Typography style={{ color: "#6d5c4e", fontWeight: 700, marginBottom: 8 }}>Key features *</Typography>
                  <div className={classes.tagInput}><TextField className={classes.field} fullWidth variant="outlined" value={featureInput} onChange={(event) => setFeatureInput(event.target.value)} onKeyDown={(event) => tagKeyDown(event, "features", featureInput, setFeatureInput)} placeholder="Example: Export quality" /><Button type="button" variant="outlined" className={classes.secondaryButton} onClick={() => addTag("features", featureInput, setFeatureInput)}>Add</Button></div>
                  <div className={classes.tagList}>{form.features.map((feature) => <Chip key={feature} className={classes.chip} label={feature} onDelete={() => removeTag("features", feature)} />)}</div>
                  <div className={classes.uploadBox}>
                    <div><Typography style={{ color: "#525252", fontWeight: 700 }}>Main product image *</Typography><Typography className={classes.fileText}>{mainImage ? mainImage.name : form.img ? "Existing image will be kept unless you choose a new one." : "Choose one clear product image."}</Typography></div>
                    <label htmlFor="main-product-image"><Button component="span" variant="outlined" className={classes.secondaryButton} startIcon={<CloudUploadIcon />}>Choose main image</Button></label>
                    <input key={`main-${fileInputKey}`} id="main-product-image" className={classes.hiddenInput} type="file" accept="image/*" onChange={(event) => setMainImage(event.target.files[0] || null)} />
                  </div>
                  <div className={classes.uploadBox}>
                    <div><Typography style={{ color: "#525252", fontWeight: 700 }}>Gallery images <span style={{ color: "#9d8c7d", fontWeight: 400 }}>(optional)</span></Typography><Typography className={classes.fileText}>{galleryFiles.length ? `${galleryFiles.length} gallery image${galleryFiles.length > 1 ? "s" : ""} selected` : "Add multiple supporting images if you have them."}</Typography></div>
                    <label htmlFor="gallery-product-images"><Button component="span" variant="outlined" className={classes.secondaryButton} startIcon={<CloudUploadIcon />}>Choose gallery</Button></label>
                    <input key={`gallery-${fileInputKey}`} id="gallery-product-images" className={classes.hiddenInput} type="file" accept="image/*" multiple onChange={(event) => setGalleryFiles(Array.from(event.target.files || []))} />
                  </div>
                  <Grid container spacing={1} justifyContent="flex-end"><Grid item>{editingId && <Button type="button" onClick={deleteProduct} disabled={busy} variant="outlined" startIcon={<DeleteOutlineIcon />} className={classes.deleteButton}>Delete product</Button>}</Grid><Grid item><Button type="button" onClick={reset} startIcon={<AddIcon />} className={classes.secondaryButton}>Clear</Button></Grid><Grid item><Button type="submit" disabled={busy} className={classes.primaryButton} startIcon={busy ? <CircularProgress size={18} color="inherit" /> : <PublishIcon />}>{busy ? "Publishing…" : editingId ? "Update product" : "Publish product"}</Button></Grid></Grid>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper className={classes.card} elevation={0}>
                <Typography className={classes.sectionTitle}>Live catalogue</Typography>
                <Typography className={classes.fileText} style={{ marginBottom: 16 }}>Select a product to update its details. Changes go live immediately after publishing.</Typography>
                <Divider style={{ marginBottom: 16 }} />
                <Grid container spacing={1.5}>
                  {products.length ? products.map((product) => <Grid item xs={6} key={product.id}><div className={classes.productCard}><img className={classes.productImage} src={product.img} alt={product.name} /><div className={classes.productBody}><Typography className={classes.productName}>{product.name}</Typography>{(product.categories || []).slice(0, 2).map((category) => <Chip key={category} className={classes.chip} label={category} size="small" />)}<Button fullWidth size="small" onClick={() => edit(product)} startIcon={<EditIcon />} className={classes.secondaryButton}>Edit</Button></div></div></Grid>) : <Grid item xs={12}><Typography className={classes.empty}>{key ? "No products found yet." : "Use your admin URL key to load the catalogue."}</Typography></Grid>}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          {status && <Typography className={classes.status}>{status}</Typography>}
        </div>
      </div>
    </Layout>
  </>;
}
