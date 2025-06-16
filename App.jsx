import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, LayoutTemplate, PenSquare, PlusSquare, Clapperboard, Instagram, Youtube,
  FileText, Loader2, Sparkles, Video, Settings, FileUp, Image as ImageIcon,
  Sun, Moon, Droplet, Palette, Download, Clipboard, ClipboardCheck, Captions, CaseSensitive, UserSquare
} from 'lucide-react';

// =====================================================================
// KOMPONEN UTAMA (Aplikasi Induk)
// =====================================================================
export default function App() {
  const [activeView, setActiveView] = useState('start');
  const [editorMode, setEditorMode] = useState('vidscribe');

  const openEditor = (mode) => {
    setEditorMode(mode);
    setActiveView('editor');
  };

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen font-sans flex flex-col">
      <header className="bg-gray-950 text-white shadow-md border-b border-gray-800 z-10">
        <div className="container mx-auto flex items-center justify-between p-3 px-6">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-600 p-2 rounded-lg">
                <Clapperboard className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold">RLX4</h1>
          </div>
          <a href="#" className="text-sm font
