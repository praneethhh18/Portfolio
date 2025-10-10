"use client";

import { useEffect, useState } from 'react';
import { CERTIFICATE_FILES, CertFile } from '@/lib/certificates';
import { v4 as uuidv4 } from 'uuid';

export default function CertificationsClient() {
  const [certs, setCerts] = useState<CertFile[]>([]);
  const [title, setTitle] = useState('');
  const [path, setPath] = useState('');
  const [type, setType] = useState<'pdf' | 'image'>('image');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('certs') : null;
    if (stored) setCerts(JSON.parse(stored));
    else setCerts(CERTIFICATE_FILES);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('certs', JSON.stringify(certs));
  }, [certs]);

  function addCert(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !path) return;
    const newCert: CertFile = { id: uuidv4(), title, path, type };
    setCerts((s) => [newCert, ...s]);
    setTitle('');
    setPath('');
  }

  function removeCert(id: string) {
    setCerts((s) => s.filter((c) => c.id !== id));
  }

  return (
    <div className="space-y-6">
      <form onSubmit={addCert} className="flex gap-2">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="input" />
        <input value={path} onChange={(e) => setPath(e.target.value)} placeholder="/path/or/url" className="input" />
        <select value={type} onChange={(e) => setType(e.target.value as any)} className="select">
          <option value="image">Image</option>
          <option value="pdf">PDF</option>
        </select>
        <button type="submit" className="btn">Add</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div key={c.id} className="p-4 border rounded">
            <div className="flex justify-between items-start">
              <h4 className="font-bold">{c.title}</h4>
              <div className="flex gap-2">
                <a href={c.path} target="_blank" rel="noreferrer" className="text-sm text-primary underline">View</a>
                <button onClick={() => removeCert(c.id)} className="text-sm text-destructive">Remove</button>
              </div>
            </div>
            <div className="mt-3">
              {c.type === 'image' ? (
                // Using next/image here may block external urls; use img for simplicity
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.path} alt={c.title} className="w-full h-48 object-contain" />
              ) : (
                <div className="h-48 flex items-center justify-center bg-muted text-muted-foreground">PDF: {c.path.split('/').pop()}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
