'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    
    let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    statusBarItem.command = "workbench.action.tasks.runTask";
    statusBarItem.text = "$(list-unordered) Project Tasks";
    context.subscriptions.push(statusBarItem);
    statusBarItem.show();
}

export function deactivate() {
    console.log("Project Tasks deactivated.");
}