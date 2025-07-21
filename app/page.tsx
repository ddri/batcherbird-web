import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Download, Zap, Music, Settings, Headphones, Star, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">BatcherBird</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#download" className="text-slate-300 hover:text-white transition-colors">
              Download
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Open Source • Professional Grade
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional Auto-Sampling for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Hardware Synths
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            BatcherBird is the open-source alternative to commercial sampling tools. Built with Rust and Tauri for
            pristine audio quality and professional-grade batch sampling of vintage synthesizers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-3 bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose BatcherBird?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Professional features that rival commercial tools, completely free and open source
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <Headphones className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Professional Audio Quality</CardTitle>
                <CardDescription className="text-slate-300">
                  Studio-grade recording with pristine quality
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="space-y-2">
                  <li>• 32-bit float WAV export (studio standard)</li>
                  <li>• Sub-millisecond MIDI timing precision</li>
                  <li>• Automatic release tail capture</li>
                  <li>• Zero-dropout recording engine</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <Settings className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Hardware Synthesizer Support</CardTitle>
                <CardDescription className="text-slate-300">
                  Seamless integration with your vintage gear
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="space-y-2">
                  <li>• Auto-detects MIDI and audio interfaces</li>
                  <li>• Tested with real hardware (Korg DW6000, Arturia MiniFuse)</li>
                  <li>• MIDI panic for stuck note recovery</li>
                  <li>• Professional timing and velocity control</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <Zap className="w-12 h-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Batch Sampling</CardTitle>
                <CardDescription className="text-slate-300">
                  Automate your sampling workflow efficiently
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="space-y-2">
                  <li>
                    • <strong>Range Recording</strong>: Sample entire octaves (C2-C6) automatically
                  </li>
                  <li>
                    • <strong>Individual Notes</strong>: Precise single-note sampling
                  </li>
                  <li>
                    • <strong>Progress Monitoring</strong>: Real-time feedback with note names
                  </li>
                  <li>
                    • <strong>Persistent Streams</strong>: Ableton-style audio engine prevents corruption
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Screenshot placeholder */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="BatcherBird Interface Screenshot"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
            <p className="text-slate-400 mt-4">BatcherBird's intuitive interface for professional sampling workflows</p>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Built for the Community</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            BatcherBird is completely open source, built by musicians for musicians. No licensing fees, no restrictions
            - just professional-grade sampling tools for everyone.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-800/30 border-slate-700">
              <CardHeader>
                <Github className="w-8 h-8 text-blue-400 mb-2" />
                <CardTitle className="text-white">Open Source</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>
                  Built with Rust and Tauri for performance and reliability. Contribute, modify, and improve the
                  codebase.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/30 border-slate-700">
              <CardHeader>
                <Star className="w-8 h-8 text-yellow-400 mb-2" />
                <CardTitle className="text-white">Community Driven</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>
                  Feature requests, bug reports, and contributions welcome. Built by the community, for the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="download"
        className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-y border-slate-700/50"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Sampling?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Download BatcherBird today and transform your vintage synthesizers into professional sample libraries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download for Windows
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download for macOS
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-4 text-lg bg-transparent"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Music className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">BatcherBird</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Issues
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700/50 text-center text-slate-400">
            <p>&copy; 2024 BatcherBird. Open source under MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
