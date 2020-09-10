//@ts-expect-error
import * as gi from 'node-gtk';

// The following returns a Promise
// const ms = gi.listAvailableModules();

const Gtk = gi.require('Gtk', '3.0')
const Granite = gi.require('Granite', '1.0')

gi.startLoop()
Gtk.init()

const win = new Gtk.Window()
win.on('destroy', () => Gtk.mainQuit())
win.on('delete-event', () => false)

{
  const welcome = new Granite.WidgetsWelcome('Granite Demo', 'This is a demo of the granite lib');
  welcome.append("text-x-vala", "Visit Valadoc", "The canonical source for Vala API references.");
  welcome.append("text-x-source", "Get Granite Source", "Granite's source code is hosted on GitHub.");
  win.add(welcome);
}

win.showAll()
Gtk.main()
