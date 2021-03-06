import * as vscode from 'vscode';
import { nodeDepTypes } from '../constants';
import { NodeDepTypes, ITerminalMap } from '../types';
import showDepsInputBox from '../inputBoxs/showDepsInputBox';

export default function showDepsQuickPick(terminals: ITerminalMap, nodeDependenciesInstance: any) {
  const quickPick = vscode.window.createQuickPick();
  quickPick.items = nodeDepTypes.map(label => ({ label, detail: `Install ${label}` }));
  quickPick.onDidChangeSelection(selection => {
    if (selection[0]) {
      showDepsInputBox(terminals, nodeDependenciesInstance, selection[0].label as NodeDepTypes)
        .catch(console.error);
    }
  });
  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.show();
};