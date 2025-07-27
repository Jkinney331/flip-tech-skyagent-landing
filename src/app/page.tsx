import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Star, Users, Zap, Shield, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md dark:bg-slate-900/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">SkyAgent</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Pricing</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Testimonials</a>
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Assistant
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
              Meet your AI Agent
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Transform your workflow with intelligent automation. SkyAgent learns your patterns, 
              anticipates your needs, and handles complex tasks with precision.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Everything you need to work smarter
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              SkyAgent combines cutting-edge AI with intuitive design to revolutionize how you work.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <Users className="h-5 w-5 flex-none text-blue-600" />
                  Real-time Collaboration
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-300">
                  <p className="flex-auto">
                    Work together seamlessly with AI-powered suggestions and real-time updates across your team.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <Shield className="h-5 w-5 flex-none text-green-600" />
                  Enterprise Security
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-300">
                  <p className="flex-auto">
                    Bank-level security with end-to-end encryption and compliance with industry standards.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <TrendingUp className="h-5 w-5 flex-none text-purple-600" />
                  Smart Analytics
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-300">
                  <p className="flex-auto">
                    Get insights into your workflow patterns and optimize your productivity with AI-driven analytics.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Choose the plan that's right for you and your team.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:max-w-none sm:grid-cols-3">
            <Card className="relative">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for individuals and small teams</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-slate-600 dark:text-slate-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Up to 5 team members
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Basic AI features
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="relative border-blue-600">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-slate-600 dark:text-slate-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Up to 25 team members
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Advanced AI features
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Custom integrations
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-slate-600 dark:text-slate-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Unlimited team members
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Custom AI models
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    24/7 phone support
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Dedicated account manager
                  </li>
                </ul>
                <Button className="w-full mt-6">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Loved by teams worldwide
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              See what our customers have to say about SkyAgent.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-3 gap-8 text-sm leading-6 text-slate-900 sm:mt-20 sm:max-w-none sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <Card className="relative">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  "SkyAgent has transformed how our team collaborates. The AI suggestions are incredibly accurate and save us hours every week."
                </p>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="ml-3">
                    <p className="font-semibold text-slate-900 dark:text-white">Sarah Johnson</p>
                    <p className="text-slate-600 dark:text-slate-300">Product Manager, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  "The security features give us peace of mind, and the integration capabilities are seamless. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="ml-3">
                    <p className="font-semibold text-slate-900 dark:text-white">Michael Chen</p>
                    <p className="text-slate-600 dark:text-slate-300">CTO, StartupXYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  "The analytics insights have helped us optimize our workflows significantly. ROI was immediate."
                </p>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="ml-3">
                    <p className="font-semibold text-slate-900 dark:text-white">Emily Rodriguez</p>
                    <p className="text-slate-600 dark:text-slate-300">Operations Director, GrowthCo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your workflow?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Join thousands of teams already using SkyAgent to work smarter, not harder.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SkyAgent</h3>
              <p className="text-slate-400">
                Transforming workflows with intelligent AI assistance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; 2024 SkyAgent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 