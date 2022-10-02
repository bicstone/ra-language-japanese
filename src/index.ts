import { TranslationMessages } from "ra-core";

const messages: Required<TranslationMessages> = {
  ra: {
    action: {
      add_filter: "検索条件",
      add: "追加",
      back: "戻る",
      bulk_actions: "%{smart_count}件選択",
      cancel: "キャンセル",
      clear_input_value: "空にする",
      clone: "複製",
      confirm: "確認",
      create: "作成",
      create_item: "%{item}を作成",
      delete: "削除",
      edit: "編集",
      export: "出力",
      list: "一覧",
      refresh: "更新",
      remove_filter: "検索条件を削除",
      remove_all_filters: "すべての検索条件を削除",
      remove: "削除",
      save: "保存",
      search: "検索",
      select_all: "すべて選択",
      select_row: "この行を選択",
      show: "詳細",
      sort: "並び替え",
      undo: "元に戻す",
      unselect: "選択解除",
      expand: "開く",
      close: "閉じる",
      open_menu: "開く",
      close_menu: "閉じる",
      update: "更新",
      move_up: "上へ移動",
      move_down: "下へ移動",
      open: "開く",
      toggle_theme: "ダークモード切替",
    },
    boolean: {
      true: "はい",
      false: "いいえ",
      null: "未選択",
    },
    page: {
      create: "%{name}を作成",
      dashboard: "ダッシュボード",
      edit: "%{name} #%{id}",
      error: "問題が発生しました",
      list: "%{name}",
      loading: "読込中",
      not_found: "見つかりませんでした",
      show: "%{name} #%{id}",
      empty: "%{name}はありません",
      invite: "作成しますか？",
    },
    input: {
      file: {
        upload_several:
          "アップロードするファイルをドロップ、または選択してください",
        upload_single:
          "アップロードするファイルをドロップ、または選択してください",
      },
      image: {
        upload_several:
          "アップロードする画像をドロップ、または選択してください",
        upload_single: "アップロードする画像をドロップ、または選択してください",
      },
      references: {
        all_missing: "データは利用できなくなりました",
        many_missing: "選択したデータは利用できなくなりました",
        single_missing: "選択したデータは利用できなくなりました",
      },
      password: {
        toggle_visible: "非表示",
        toggle_hidden: "表示",
      },
    },
    message: {
      about: "詳細",
      are_you_sure: "本当によろしいでしょうか？",
      bulk_delete_content:
        "%{name}を削除しますか？ |||| 選択した %{smart_count}件のアイテムを削除しますか？",
      bulk_delete_title: "%{name}を削除 |||| %{name} %{smart_count}件を削除",
      bulk_update_content:
        "%{name}を更新しますか？ |||| 選択した %{smart_count}件のアイテムを更新しますか？",
      bulk_update_title: "%{name}を更新 |||| %{name} %{smart_count}件を更新",
      delete_content: "削除しますか？",
      delete_title: "%{name} #%{id} を削除",
      details: "詳細",
      error: "クライアントエラーが発生し、処理を完了できませんでした",
      invalid_form:
        "入力値に誤りがあります。エラーメッセージを確認してください",
      loading: "読み込み中です。しばらくお待ちください",
      no: "いいえ",
      not_found: "間違ったURLを入力したか、古いリンクを開いた可能性があります",
      yes: "はい",
      unsaved_changes:
        "行った変更が保存されていません。このページから移動しますか？",
    },
    navigation: {
      no_results: "結果が見つかりませんでした",
      no_more_results:
        "%{page}ページは最大のページ数を超えています。前のページに戻ってください",
      page_out_of_boundaries: "%{page}ページは最大のページ数を超えています",
      page_out_from_end: "最大のページより後に移動できません",
      page_out_from_begin: "1ページより前に移動できません",
      page_range_info: "%{offsetBegin} - %{offsetEnd} / %{total}",
      partial_page_range_info: "%{offsetBegin} - %{offsetEnd}",
      current_page: "%{page}ページ目",
      page: "%{page}ページに移動",
      first: "最初のページに移動",
      last: "最後のページに移動",
      next: "次のページに移動",
      previous: "前のページに移動",
      page_rows_per_page: "表示件数:",
      skip_nav: "コンテンツにスキップ",
    },
    auth: {
      auth_check_error: "認証に失敗しました。再度ログインしてください",
      user_menu: "プロフィール",
      username: "ユーザー名",
      password: "パスワード",
      sign_in: "ログイン",
      sign_in_error: "認証に失敗しました。入力を確認してください",
      logout: "ログアウト",
    },
    sort: {
      sort_by: "%{field}を%{order}で並び替え中",
      ASC: "昇順",
      DESC: "降順",
    },
    notification: {
      updated: "更新しました |||| %{smart_count}件更新しました",
      created: "作成しました",
      deleted: "削除しました |||| %{smart_count}件削除しました",
      bad_item: "データが不正です",
      item_doesnt_exist: "データが存在しませんでした",
      http_error: "通信エラーが発生しました",
      data_provider_error:
        "dataProviderエラー。詳細はコンソールを確認してください",
      i18n_error: "翻訳ファイルが読み込めませんでした",
      canceled: "元に戻しました",
      logged_out: "認証に失敗しました。再度ログインしてください",
      not_authorized: "このページにアクセスする権限がありません",
    },
    validation: {
      required: "必須",
      minLength: "%{min}文字以上である必要があります",
      maxLength: "%{max}文字以下である必要があります",
      minValue: "%{min}以上である必要があります",
      maxValue: "%{max}以下である必要があります",
      number: "数字である必要があります",
      email: "メールアドレスである必要があります",
      oneOf: "次のいずれかである必要があります: %{options}",
      regex: "次の正規表現形式にする必要があります: %{pattern}",
    },
    saved_queries: {
      label: "保存した検索条件",
      query_name: "検索条件名",
      new_label: "現在の検索条件を保存...",
      new_dialog_title: "検索条件を保存",
      remove_label: "検索条件を削除",
      remove_label_with_name: "検索条件 %{name} を削除",
      remove_dialog_title: "検索条件を削除",
      remove_message: "選択した保存検索条件を削除しますか？",
      help: "検索条件を保存して、あとから同じ条件で検索できます",
    },
    configurable: {
      customize: "カスタマイズ",
      templateError: "## Template error",
      configureMode: "このページをカスタマイズする",
      inspector: {
        title: "カスタマイズ",
        content: "UI要素にマウスオーバーするとカスタマイズできます",
        reset: "設定をリセット",
      },
      SimpleList: {
        primaryText: "1行目",
        secondaryText: "2行目",
        tertiaryText: "3行目",
      },
    },
  },
};

export default messages;
