"use client" // karena kita pakai state dan event

import { useState } from "react"
import Image from "next/image"
import { FaHeart } from "react-icons/fa"
import FloatingPhoto from "@/app/components/FloatingPhoto"

// Data foto untuk album
const photos = [
  { src: "/album-1.jpeg", caption: "Pertama cobain Alur" },
  { src: "/album-2.jpeg", caption: "Barrel setelah sekian lama" },
  { src: "/album-3.jpeg", caption: "Gatau dimana" },
  { src: "/album-4.jpeg", caption: "Beli kopi date" },
  // Tambahkan foto lainnya sesuai kebutuhan
]

// GANTI DENGAN TANGGAL JADIAN KAMU (format YYYY-MM-DD)
const ANNIVERSARY_DATE = "2023-01-01"

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [inputDate, setInputDate] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputDate === ANNIVERSARY_DATE) {
      setIsUnlocked(true)
      setError("")
    } else {
      setError("Tanggal jadian salah, coba lagi 😢")
    }
  }

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-md w-full border border-pink-200">
          <div className="text-center mb-6">
            <FaHeart className="text-6xl text-pink-400 mx-auto animate-pulse" />
            <h1 className="text-3xl font-bold text-pink-600 mt-4">
              Untuk Febriana
            </h1>
            <p className="text-gray-600 mt-2">Masukkan tanggal jadian kita</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              className="w-full px-4 py-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50/50"
              required
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition shadow-md">
              Buka Surat Cinta 💌
            </button>
          </form>

          <p className="text-xs text-center text-gray-400 mt-6">
            * Petunjuk: tanggal kita pertama kali jadian
          </p>
        </div>
      </div>
    )
  }

  // KONTEN UTAMA (SETELAH UNLOCK)
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background tambahan gradien transparan */}
      <div className="fixed inset-0 bg-gradient-to-b from-pink-100 via-red-50 to-pink-100" />

      {/* Figur foto melayang di background */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingPhoto
          src="/floating-image-1.jpeg"
          className="top-20 left-10 w-32 rotate-12"
          speed={4}
          amplitude={15}
        />
        <FloatingPhoto
          src="/floating-image-2.png"
          className="top-40 right-20 w-40 -rotate-6"
          speed={3.5}
          amplitude={20}
        />
        <FloatingPhoto
          src="/floating-image-3.png"
          className="bottom-20 left-1/4 w-36 rotate-45"
          speed={5}
          amplitude={10}
        />
      </div>

      {/* Konten */}
      <div className="relative z-10">
        {/* Section Selamat Ulang Tahun */}
        <section className="flex flex-col items-center justify-center h-screen px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-pink-600 animate-pulse drop-shadow-lg">
            Happy Birthday, Sayang! 🎉
          </h1>
          <p className="mt-4 text-xl text-gray-800 max-w-2xl bg-white/50 backdrop-blur-sm p-4 rounded-2xl">
            Selamat ulang tahun untuk orang yang paling istimewa di hidupku.
            Semoga hari ini dan seterusnya dipenuhi kebahagiaan, cinta, dan
            senyuman.
          </p>
          <div className="mt-8 text-pink-500 text-6xl animate-bounce">
            <FaHeart />
          </div>
        </section>

        {/* Section Album Foto */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-pink-700 mb-10 drop-shadow">
            Album Kenangan Kita 📸
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
                <div className="relative w-full h-64">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-800 font-medium">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Love Letter */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-pink-700 mb-6 drop-shadow">
              Love Letter 💌
            </h2>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-pink-200">
              <p className="text-lg text-gray-800 leading-relaxed italic">
                Untuk Febriana Dwi Anggraini,
              </p>
              <p className="mt-4 text-gray-700 text-justify">
                Di hari spesialmu ini, aku cuma pengen kamu tau betapa
                berartinya kamu di hidupku. Setiap senyuman, tawa, dan momen
                bersamamu adalah hadiah terindah. Terima kasih telah menjadi
                dirimu sendiri dan mengisi hariku dengan cinta. Semoga tahun ini
                membawa seribu kebahagiaan untukmu. Aku mencintaimu, sekarang
                dan selamanya. ❤️
              </p>
              <p className="mt-6 text-right text-gray-800 font-semibold">
                Dari seseorang yang selalu mencintaimu,
                <br />
                Yafy Habibi Riza Putra
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
