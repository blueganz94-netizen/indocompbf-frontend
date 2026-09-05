'use client';

import { useEffect, useState } from 'react';
import { Loader2, Upload } from 'lucide-react';

import {
  getPlayerImages,
  uploadPlayerImage,
  playerImageSrc,
  PlayerImage,
} from '@/lib/api';

export default function ImagePickerField({
  value,
  onChange,
  playerName,
}: {
  value: string;
  onChange: (url: string) => void;
  playerName?: string;
}) {
  const [images, setImages] = useState<PlayerImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadImages = async () => {
    try {
      setLoading(true);
      const data = await getPlayerImages();
      setImages(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load images.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleUpload = async (file: File) => {
    try {
      setUploading(true);
      setError(null);

      const uploaded = await uploadPlayerImage(file, playerName);

      await loadImages();
      onChange(uploaded.url);
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : 'Upload failed.'
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.03]">
          {value ? (
            <img
              src={playerImageSrc(value)}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="font-outfit text-[10px] text-white/25">
              N/A
            </span>
          )}
        </div>

        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="admin-input flex-1"
          disabled={loading}
        >
          <option value="">
            {loading ? 'Loading images...' : 'Select image'}
          </option>

          {images.map((img) => (
            <option key={img.filename} value={img.url}>
              {img.filename}
            </option>
          ))}
        </select>
      </div>

      <label className="flex w-fit cursor-pointer items-center gap-1.5 font-rajdhani text-[11px] uppercase tracking-wider text-white/40 transition hover:text-white">
        {uploading ? (
          <Loader2 size={13} className="animate-spin" />
        ) : (
          <Upload size={13} />
        )}

        {uploading ? 'Uploading...' : 'Upload new image'}

        <input
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif,video/mp4,video/webm"
          className="hidden"
          disabled={uploading}
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) handleUpload(file);
            event.target.value = '';
          }}
        />
      </label>

      {error && (
        <p className="font-outfit text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
