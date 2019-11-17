"use strict";
exports.__esModule = true;
var messages = {
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
            "delete": "削除",
            edit: "編集",
            "export": "出力",
            list: "一覧",
            refresh: "更新",
            remove_filter: "検索条件を削除",
            remove: "削除",
            save: "保存",
            search: "検索",
            show: "詳細",
            sort: "並び替え",
            undo: "元に戻す",
            expand: "開く",
            close: "閉じる"
        },
        boolean: {
            "true": "はい",
            "false": "いいえ",
            "null": "未選択"
        },
        page: {
            create: "%{name} を作成",
            dashboard: "ダッシュボード",
            edit: "%{name} #%{id}",
            error: "問題が発生しました",
            list: "%{name}",
            loading: "読込中",
            not_found: "見つかりませんでした",
            show: "%{name} #%{id}"
        },
        input: {
            file: {
                upload_several: "アップロードするファイルをドロップ、または選択してください",
                upload_single: "アップロードするファイルをドロップ、または選択してください"
            },
            image: {
                upload_several: "アップロードする画像をドロップ、または選択してください",
                upload_single: "アップロードする画像をドロップ、または選択してください"
            },
            references: {
                all_missing: "データが利用できなくなりました",
                many_missing: "選択したデータが利用できなくなりました",
                single_missing: "選択したデータが利用できなくなりました"
            }
        },
        message: {
            about: "詳細",
            are_you_sure: "本当によろしいですか？",
            bulk_delete_content: "%{name} を削除してよろしいですか？ |||| 選択した %{smart_count}件のアイテムを削除してよろしいですか？",
            bulk_delete_title: "%{name} を削除 |||| %{name} %{smart_count}件を削除",
            delete_content: "削除してよろしいですか？",
            delete_title: "%{name} #%{id} を削除",
            details: "詳細",
            error: "クライアントエラーが発生し、処理を完了できませんでした",
            invalid_form: "入力値に誤りがあります。エラーメッセージを確認してください",
            loading: "読み込み中です。しばらくお待ちください",
            no: "いいえ",
            not_found: "間違ったURLを入力したか、間違ったリンクを辿りました",
            yes: "はい"
        },
        navigation: {
            no_results: "結果が見つかりませんでした",
            no_more_results: "ページ番号 %{page} は最大のページ数を超えています。前のページに戻ってください",
            page_out_of_boundaries: "ページ番号 %{page} は最大のページ数を超えています",
            page_out_from_end: "最大のページ数より後に移動できません",
            page_out_from_begin: "1 ページより前に移動できません",
            page_range_info: "%{offsetBegin}-%{offsetEnd} / %{total}",
            page_rows_per_page: "表示件数:",
            next: "次",
            prev: "前"
        },
        auth: {
            auth_check_error: "認証に失敗しました。再度ログインしてください",
            user_menu: "プロフィール",
            username: "ユーザー名",
            password: "パスワード",
            sign_in: "ログイン",
            sign_in_error: "認証に失敗しました。入力を確認してください",
            logout: "ログアウト"
        },
        notification: {
            updated: "更新しました |||| %{smart_count} 件更新しました",
            created: "作成しました",
            deleted: "削除しました |||| %{smart_count} 件削除しました",
            bad_item: "データが不正です",
            item_doesnt_exist: "データが存在しませんでした",
            http_error: "通信エラーが発生しました",
            data_provider_error: "dataProviderエラー。詳細はコンソールを確認してください",
            i18n_error: "翻訳ファイルが読み込めませんでした",
            canceled: "元に戻しました",
            logged_out: "認証に失敗しました。再度ログインしてください"
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
            regex: "次の正規表現形式にする必要があります: %{pattern}"
        }
    }
};
exports["default"] = messages;
